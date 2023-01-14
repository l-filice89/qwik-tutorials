import {component$} from "@builder.io/qwik";

export default component$(() => {

    const github = {
        org: 'BuilderIO',
        repos: ['qwik', 'partytown'] as string[] | null
    };

    return (
        <>
          <span>
              Github username:
              <input value={github.org}/>
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