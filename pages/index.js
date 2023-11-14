import { InfoBox } from "@/components/InfoBox"
import { JobOpening } from "@/components/JobOpening"
import Head from "next/head"

export default function Index () {
  return (
    <>
      <Head>
        <title>Agro Trade</title>
      </Head>
      <main>
        <InfoBox>
          <ul>
            <li>Watermelon</li>
            <li>Orange</li>
            <li>Gauva</li>
          </ul>
        </InfoBox>

        <JobOpening
        title='Next JS Hybrid Work'
        location='Nairobi'/>

        <JobOpening
        title='React Developer'
        location='Enugu'/>
      </main>
    </>
  )
}