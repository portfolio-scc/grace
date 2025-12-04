'use client';

import { useAuth } from '@/app/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { Note } from '@/lib/types';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, Timestamp, updateDoc } from 'firebase/firestore';
import { Edit2, LogIn, LogOut, Pencil, Plus, Trash2, UserPlus, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function NotesPage() {
  const { user, loading: authLoading, signIn, signUp, logout } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'notes'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate(),
      })) as Note[];
      setNotes(notesData);
    });

    return unsubscribe;
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      setShowAuthForm(false);
      setEmail('');
      setPassword('');
    } catch (error: any) {
      setAuthError(error.message);
    }
  };

  const handleCreateNote = async () => {
    if (!user || !title.trim() || !content.trim()) return;

    try {
      await addDoc(collection(db, 'notes'), {
        title: title.trim(),
        content: content.trim(),
        creatorId: user.uid,
        creatorEmail: user.email,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      setTitle('');
      setContent('');
      setIsCreating(false);
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const handleUpdateNote = async (noteId: string) => {
    if (!title.trim() || !content.trim()) return;

    try {
      await updateDoc(doc(db, 'notes', noteId), {
        title: title.trim(),
        content: content.trim(),
        updatedAt: Timestamp.now(),
      });
      setTitle('');
      setContent('');
      setEditingId(null);
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const handleDeleteNote = async (noteId: string) => {
    if (!confirm('Are you sure you want to delete this note?')) return;

    try {
      await deleteDoc(doc(db, 'notes', noteId));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const startEditing = (note: Note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
    setIsCreating(false);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setIsCreating(false);
    setTitle('');
    setContent('');
  };

  if (authLoading) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="text-center text-zinc-600 dark:text-zinc-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Notes
        </h1>
        <div className="flex items-center gap-1.5">
          {user ? (
            <>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 hidden sm:inline mr-1">
                {user.email}
              </span>
              <button
                onClick={() => setIsCreating(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-purple-700 dark:bg-purple-600 text-white rounded-md hover:bg-purple-800 dark:hover:bg-purple-700 transition-colors"
              >
                <Plus size={14} />
                <span className="hidden sm:inline">New Note</span>
              </button>
              <button
                onClick={logout}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-purple-200 dark:border-purple-800 rounded-md hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors text-purple-700 dark:text-purple-300"
              >
                <LogOut size={14} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowAuthForm(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-purple-700 dark:bg-purple-600 text-white rounded-md hover:bg-purple-800 dark:hover:bg-purple-700 transition-colors"
            >
              <LogIn size={14} />
              Sign In
            </button>
          )}
        </div>
      </div>

      {showAuthForm && !user && (
        <div className="mb-6 p-4 border border-purple-200 dark:border-purple-900 rounded-lg bg-purple-50 dark:bg-purple-950/30">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h2>
          <form onSubmit={handleAuth} className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2.5 py-1.5 text-sm border border-zinc-200 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                required
                placeholder='Enter your email'
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-2.5 py-1.5 text-sm border border-zinc-200 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                required
                minLength={6}
                placeholder='Enter your password'
              />
            </div>
            {authError && (
              <p className="text-sm text-red-600 dark:text-red-400">{authError}</p>
            )}
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-purple-700 dark:bg-purple-600 text-white rounded-md hover:bg-purple-800 dark:hover:bg-purple-700 transition-colors"
              >
                {isSignUp ? <UserPlus size={14} /> : <LogIn size={14} />}
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
              <button
                type="button"
                onClick={() => setShowAuthForm(false)}
                className="px-3 py-1.5 text-sm border border-purple-200 dark:border-purple-800 rounded-md hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors text-purple-700 dark:text-purple-300"
              >
                Cancel
              </button>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-purple-700 dark:text-purple-300 font-medium hover:underline"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </form>
        </div>
      )}

      {(isCreating || editingId) && user && (
        <div className="mb-6 p-4 border border-purple-200 dark:border-purple-900 rounded-lg bg-purple-50 dark:bg-purple-950/30">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            {isCreating ? 'Create New Note' : 'Edit Note'}
          </h2>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-2.5 py-1.5 text-sm border border-zinc-200 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                placeholder="Enter note title"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                className="w-full px-2.5 py-1.5 text-sm border border-zinc-200 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400 resize-none"
                placeholder="Enter note content"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => isCreating ? handleCreateNote() : handleUpdateNote(editingId!)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-purple-700 dark:bg-purple-600 text-white rounded-md hover:bg-purple-800 dark:hover:bg-purple-700 transition-colors"
              >
                <Pencil size={13} />
                {isCreating ? 'Create' : 'Save'}
              </button>
              <button
                onClick={cancelEditing}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-purple-200 dark:border-purple-800 rounded-md hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors text-purple-700 dark:text-purple-300"
              >
                <X size={13} />
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {notes.length === 0 ? (
          <div className="text-center py-8 text-sm text-zinc-600 dark:text-zinc-400">
            No notes yet. {user && 'Create your first note!'}
          </div>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="p-4 border border-purple-200 dark:border-purple-900 rounded-lg bg-purple-50 dark:bg-purple-950/30 hover:border-purple-300 dark:hover:border-purple-800 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {note.title}
                </h3>
                {user && user.uid === note.creatorId && (
                  <div className="flex gap-1">
                    <button
                      onClick={() => startEditing(note)}
                      className="p-1.5 text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 rounded-md transition-colors"
                      title="Edit"
                    >
                      <Edit2 size={14} />
                    </button>
                    <button
                      onClick={() => handleDeleteNote(note.id)}
                      className="p-1.5 text-purple-700 dark:text-purple-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-purple-100 dark:hover:bg-purple-900 rounded-md transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2 whitespace-pre-wrap">
                {note.content}
              </p>
              <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500">
                <span>By {note.creatorEmail}</span>
                <span>{note.createdAt?.toLocaleDateString()}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
