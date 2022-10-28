import { TodoList } from '../components/TodoList';

export const Home = () => {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <h1 data-testid="page-title">Home</h1>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <p>This is the list.</p>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <TodoList />
        </>
    );
};
