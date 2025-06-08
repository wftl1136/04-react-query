"use client"; // потрібно, якщо ти в Next.js App Router

import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";
import type { SearchBarProps } from "../../types/props";
import { useRef } from "react";

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    const query = formData.get("query")?.toString().trim();

    if (!query) {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(query);
    formRef.current?.reset(); // очищення форми
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>

        <form
          ref={formRef}
          className={styles.form}
          action={handleAction} // ✅ новий API
        >
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
