import {component$, Resource, useResource$, useStore} from "@builder.io/qwik";

export default component$(() => {

    const github = useStore({
        org: 'BuilderIO'
    });

    const reposResource = useResource$<string[]>(({track, cleanup}) => {
        // We need a way to re-run fetching data whenever the `github.org` changes.
        // Use `track` to trigger re-running of this data fetching function.
        track(() => github.org);

        // A good practice is to use `AbortController` to abort the fetching of data if
        // new request comes in. We create a new `AbortController` and register a `cleanup`
        // function which is called when this function re-runs.
        const controller = new AbortController();
        cleanup(() => controller.abort());

        // Fetch the data and return the promises.
        return getRepositories(github.org, controller);
    });

    return (
        <>
          <span>
              Github username:
              <input value={github.org}
                     onInput$={(ev) => (github.org = (ev.target as HTMLInputElement).value)}/>
          </span>
            <Resource value={reposResource}
                      onPending={() => (<div> Loading... </div>)}
                      onRejected={(reason) => (<div>Error: {reason}</div>)}
                      onResolved={(data) => (
                      data.length > 0 ? (
                          <ul>
                              {data.map((repo) => (
                                  <li>
                                      {repo}
                                  </li>
                              ))}
                          </ul>
                      ) : (<div> No repos found</div>)
                      )}/>
        </>
    );
})

export async function getRepositories(
    username: string,
    controller?: AbortController
): Promise<string[]> {
    console.log('FETCH', `https://api.github.com/users/${username}/repos`);
    const resp = await fetch(`https://api.github.com/users/${username}/repos`, {
        signal: controller?.signal,
    });
    console.log('FETCH resolved');
    const json = await resp.json();
    return Array.isArray(json)
        ? json.map((repo: { name: string }) => repo.name)
        : Promise.reject(json);
}