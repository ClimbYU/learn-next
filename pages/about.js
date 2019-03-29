import Link from 'next/link';

function About() {
    return <div>
        <p>About</p>
        <Link href='/index'>
            <a>home</a>
        </Link>
    </div>;
}

export default About;