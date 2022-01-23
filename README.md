# React Hooks

React 16.8.0 is the first release to support [Hooks](https://reactjs.org/docs/hooks-intro.html).
Can be used to manage React state and component lifecycle features.

## useState
- Returns a stateful value, and a function to update it.
- Accepts optional initial state
- We can manage component state, like `setState` in React classes, but cleaner.
```
[stateful_value_getter,new_value_setter] = useState(initial_state)
```

## useEffect
- Accepts a function(say effect_function) and optional dependency list(say dep_list).
- effect_function will be invoked
    - if the values in the dep_list change
    - after every render, if no dep_list provided
    - after first render only, if dep_list is empty
- effect_function can return optional cleanup function.
- We can perform side effects from a functional component. Lifecycle such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` can be hooked into.
```
useEffect(()=>{
    // Component did mount/update, run side effects here

    return ()=>{
        // Component will unmount, run cleanup here
    }
},[dep_list])
```

## useContext
- Accepts a context object (from context API React.createContext).
- Returns the current context value, from the nearest context provider above in the tree.
- Component will always re-render when the context value changes.
- This hook is equivalent to `Consumer` from the React's context API.
```
// global context creation
export const UserContext = createContext(initial_value);

// wrap using Provider
<UserContext.Provider value={subset_of_initial_value}>
    <ConsumerComponent></ConsumerComponent>
</UserContext.Provider>

// ConsumerComponent
const stateful_value_getter = useContext(UserContext);
```

## useRef
- Returns a mutable `ref` object(say ref_obj).
- Accepts initial value, to initialize `.current` property of ref_obj.
- The returned object will persist for the full lifetime of the component.
- Can be used to access DOM element, to store mutable value as instance variable or to just count renders.
```
const paraRef = useRef(null);
<p ref={paraRef}></p>
```

## useReducer
- Returns the current state and a dispatch method.
- dispatch method enables to fire actions instead of directly modifying the state.
- Accepts a reducer of type `(state, action) => newState`, and initial state.
- Accepts optional 3rd argument, a function for lazy initialization.
```
const reducer = (currentState,action)=>{
    switch (action.type) {
        case 'value':
            return updatedState
        default:
            return currentState;
    }
}
const lazyInit = (initialState) => initialState.someModification();

const [state,dispatch] = useReducer(reducer,initialState,lazyInit)
<button onClick={() => dispatch({type: 'value'})}>Click</button>
```

## useMemo
- Accepts a function and dependency list(say dep_list).
- Returns a `memoized value`.
- useMemo will only recompute the memoized value
    - if the values in the dep_list change
    - after every render, if no dep_list provided
    - after first render only, if dep_list is empty
```
const memoized_value = useMemo(()=>{
    // expensive computation
    return value
},[]);
```

## useCallback
- Accepts a function and dependency list(say dep_list).
- Returns a memoized callback function.
- useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).
```
const childCallback = ()=>{}
const memoized_callback = useCallback(childCallbacl,[])
```

## useImperativehandler
- Accepts ref object, a function and dependency list.
- Customizes the instance value of child that is exposed to parent components when using ref.
- Child must be wrapped in `forwardref` to accept ref.
```
// child component
function ChildComponent(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} />;
}
ChildComponent = forwardRef(ChildComponent);

// parent component
inputRef.current.focus()
...
<ChildComponent ref={inputRef} />
```

## useLayoutEffect
- The signature is identical to useEffect.
- Invoked synchronously after all DOM mutations and before screen paint.

## useDebugValue
- Used to display a label for custom hooks in React DevTools.