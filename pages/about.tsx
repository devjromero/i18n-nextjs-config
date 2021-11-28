import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";


const Home: NextPage = () => {
    let { t } = useTranslation();

    return (
        <div>
            <h1>{t("common:greeting")}</h1>
        </div>
    )
}

export default Home
