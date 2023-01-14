import {component$} from "@builder.io/qwik";

export default component$(() => {
    return (
        <>
            <div>
              <span>
                  Github organization:
                  <input value="BuilderIO"/>
              </span>
                <ul>
                    <li><a href="https://github.com/BuilderIO/qwik" target="_blank">Qwik</a></li>
                    <li><a href="https://github.com/BuilderIO/partytown" target="_blank">Partytown</a></li>
                </ul>
            </div>
        </>
    );
})
