import {component$, useStore} from "@builder.io/qwik";

export default component$(() => {

    const github = useStore({
        org: 'BuilderIO',
        repos: ['qwik', 'partytown'] as string[] | null
    });

    return (
        <>
          <span>
              Github username:
              <input value={github.org}
              onInput$={(ev) => (github.org = (ev.target as HTMLInputElement).value)}/>
          </span>
            <div>
                {github.repos ? (
                    <ul>
                        {github.repos.map((repo) => (
                            <li>
                                <a href={`https://github.com/${github.org}/${repo}`}
                                   target="_blank">
                                    {github.org}/{repo}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    'loading...'
                )}
            </div>
        </>
    );
})