import useSWR from "swr"

export default function Reviews({...props}) {

    const fetcher = url => fetch(url).then(res => res.json())
    const baseUrl = "https://filecoin.tools"


    const url = baseUrl + '/api/deals/' + props.id + '/list?page=1&per_page=20'
    const { data: deals, error } = useSWR(url, fetcher)
    console.log(deals['Deals'])

    return (
        <div className="lelelelele">
            {
                error ?
                    'Error'
                    :
                    <div>
                        {
                            deals['Deals'].map((deal, index) => (
                                <div
                                    key={index}
                                >
                                    <p>{ deal['DealInfo']['Proposal']['Client'] }</p>
                                </div>
                            ))
                        }


                    </div>
            }
        </div>
    );
}
