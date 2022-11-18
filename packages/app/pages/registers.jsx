import React, { useState, useEffect, Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import Layout from '../components/layouts/Layout';


const Registers = () => {
    return (
        <>
        <Layout page={'registers'}/>
        <h1>Registers</h1>
        </>
    )
}

export default Registers;