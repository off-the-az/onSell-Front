import PageTemplate from '../Page.template';

export default function Error403 (){
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
                <h1>Error: 403</h1>
                <h3>На жаль дана сторінка поки недоступна 😥</h3>
            </div>
        }/>
    )
}