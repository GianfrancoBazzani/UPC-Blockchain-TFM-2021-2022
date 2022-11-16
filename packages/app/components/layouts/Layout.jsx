import React, { useState, useEffect, Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

const Header = styled.div`
    display: flex;
    overflow: hidden;
    background-color: #e8ecfb;
    padding: 1rem 1rem;
    column-gap: 2rem;
`
const Text = styled.p`
    font-size: 16px;
    font-family: sans-serif;
    color: #5D6785;
`
const Container = styled.div`
    cursor: pointer;
    padding: 0 0.5rem 0 0.5rem;
    
    &:hover {
        background-color: #d7d9e3;
        border-radius: 0.75rem;
    }
`
const Layout = () => {


    return (
        <Header>
            <Image src='/static/images/logo.png' width={'48rem'} height={'48rem'} />
            <Container>
                <Text>Registers</Text>
            </Container>
            <Container>
                <Text>Debts</Text>
            </Container>
            <Container>
                <Text>Allowance</Text>
            </Container>
        </Header>
        
    )
}

export default Layout;