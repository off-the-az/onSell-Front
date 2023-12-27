import PageTemplate from '../Page.template';

export default function Error401 (){
    return (
        <PageTemplate props={
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }}>
                <h1>Error: 401</h1>
                <h3>Для доступу до даної функціональності потрібно увійти 😏</h3>
            </div>
        }/>
    )
}