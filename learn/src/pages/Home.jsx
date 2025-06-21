import Skills from '../Skills'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to our website!</p>
            <Skills skill={['React', 'Node', 'Express', 'MongoDB']} />
        </div>
    );
}
export default Home;