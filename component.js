const e = React.createElement;
const useState = React.useState;
const useEffect = React.useEffect;

function Component() {
    // State and property setter
    const [clicked, setClicked] = useState(0);

    // Called at every render
    useEffect(() => {
        document.title = clicked ? 'useEffect changed this title' : 'React Hooks Experiment';
    });

    // From now on it's basically "the old render"
    if (clicked) {
        return e('p', {}, 'useState changed the state of this component. useEffect changed the title of this page.');
    }

    return e(
        'button',
        {onClick: () => setClicked(true)},
        'Functional Component (Button)'
    );
}

const domContainer = document.querySelector('#component_container');
ReactDOM.render(e(Component), domContainer);