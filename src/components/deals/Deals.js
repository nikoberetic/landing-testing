import useSWR from "swr"

export default function Deals({...props}) {

    const fetcher = url => fetch(url).then(res => res.json())
    const baseUrl = "https://filecoin.tools";


    const url = baseUrl + '/api/deals/' + props.id + '/list?page=1&per_page=20'
    const { data: deals, error } = useSWR(url, fetcher)

    let dealsVal = [];
    if ( deals === undefined ) {
        dealsVal = [];
    } else {
        dealsVal = deals['Deals'];
    }

    return (
        <div>
            {
                error ?
                    'Error'
                    :
                    <div>
                        {

                            Object.keys(dealsVal).map((key) =>
                                <div key={key} >
                                    <p>{ dealsVal[key]['DealInfo']['Proposal']['Client'] }</p>
                                </div>
                            )
                        }
                    </div>
            }
        </div>
    );
}
