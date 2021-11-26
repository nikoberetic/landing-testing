import Image from "next/image";
import {useState} from "react";

import close from '../../../public/img/close.svg';
import styles from "../miner-profile/lightbox/lightbox.module.css";
import minimist from "minimist";
import process from "process";
import {getFilesFromPath, Web3Storage} from "web3.storage";
import {useRouter} from "next/router";




export default function ModalVerifyProfile({...props}) {

    const router = useRouter();

    const [ hex, setHex] = useState(''); // hexFromLotusWalletSignCommand
    const [ signature, setSignature] = useState(''); // signatureInputFromMiner
    const [ CID, setCID] = useState('');

    const uploadImages = () => {
        const fileInput = document.querySelector('input[type="file"]')
        // console.log(fileInput.files)
        w3s(fileInput.files).then(r => console.log(r));
    }


    const getFiles = () => {
        const fileInput = document.querySelector('input[type="file"]')
        return fileInput.files
    }

    async function w3s (files) {
        console.log('pozvano', files.length)
        const args = minimist(process.argv.slice(2))
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEU4NWMxNmU3NmMxMWJiZDBGRTU1MWRFNThjOTViNjQ0NzAwQzUyOTIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Mzc1MjEzMDk4NjUsIm5hbWUiOiJmaWxncmFtLWRldiJ9.tLbSkRkq8dFevpqIKlGOX2vEyMe930Vg_Vq1Hd59iQo'

        if (!token) {
            return console.error('A token is needed. You can create one on https://web3.storage')
        }

        if (files.length < 1) {
            return console.error('Please supply the path to a file or directory')
        }

        const storage = new Web3Storage({ token })


        // for (const path of args._) {
        //     const pathFiles = await getFilesFromPath(path)
        //     files.push(...pathFiles)
        // }

        console.log(`Uploading ${files.length} files`)
        const cid = await storage.put(files)
        setCID(cid)
        console.log('Content added with CID:', cid)
    }



    const verifyMiner = (e) => {
        e.preventDefault();
        const minerID = router.query.slug;
        console.log(minerID, hex, signature)
        // fetchAnotherPage(minerID).then(r => console.log(r));
    }


    async function fetchAnotherPage(minerID) {
        await fetch('//localhost:3000/api/sp/verify/' + minerID, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                'hexMessage': '<hexFromLotusWalletSignCommand>',
                'signature': '<signatureInputFromMiner>'
            }
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
            });
    }

    return (
        <div className={` ${'modalEl'} ${props.showModalVerify && 'active'} `}>
            <div className="modalEl-inner big">
            {
                props.showModalVerify &&
                    <>
                        <button type="button" onClick={props.toggleModalVerify} className={ styles.close }>
                            <Image src={close} alt="Close" />
                        </button>
                        <p>Radiiiiii</p>
                        <input type="file" multiple="multiple" />
                        <button type="button" onClick={uploadImages}>
                            Upload images
                        </button>
                        <form onSubmit={e => verifyMiner(e)}>
                            <input onChange={e => setHex(e.target.value)} type="text" value={hex} placeholder="hex" />
                            <input onChange={e => setSignature(e.target.value)} type="text" value={signature} placeholder="sig" />
                            <button type="submit">Submit</button>
                        </form>
                        <button type="button" onClick={verifyMiner}>
                            Verify miner
                        </button>

                        <h2>{ CID }</h2>
                    </>
            }
            </div>
        </div>
    );
}
