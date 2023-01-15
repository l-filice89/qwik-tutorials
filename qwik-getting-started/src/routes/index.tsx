import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import {Link} from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>
        Qwik tutorial events!
      </h1>
      <ul>
        <li>
          <Link href="/listening-on-events">Listening on events</Link>
        </li>
        <li>
          <Link href="/listening-on-document-window">Listening on document window</Link>
        </li>
      </ul>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
