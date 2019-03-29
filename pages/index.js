import React, { Fragment } from 'react';
import Link from 'next/link';

const Index = () => (
    <Fragment>
        <h1>我是Next的首页</h1>
        <Link href='/about'>
            <a>about</a>
        </Link>
        <br />
        <Link href='/bread'>
            <a>bread</a>
        </Link>
        <br />
        <Link href='/dessert'>
            <a>dessert</a>
        </Link>
        <br />
        <Link href='/drink'>
            <a>drink</a>
        </Link>
        <br />
        <Link href='/fruit'>
            <a>fruit</a>
        </Link>
        <br />
        <Link href='/meat'>
            <a>meat</a>
        </Link>
    </Fragment>
)

export default Index