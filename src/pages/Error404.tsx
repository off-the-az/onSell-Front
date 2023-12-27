import PageTemplate from '../Page.template';

export default function Error404 (){
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
                <h1>Error: 404</h1>
                <h3>Схоже даної сторінки не існує 🧐</h3>
            </div>
        }/>
    )
}