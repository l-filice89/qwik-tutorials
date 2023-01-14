import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import {Link} from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <div>
            <h1>
              Qwik tutorial simple application!
            </h1>
          <ul>
            <li><Link href="/basic-component">Basic component</Link></li>
            <li><Link href="/state-management">State management</Link></li>
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
