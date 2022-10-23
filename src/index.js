import app from './app'

app.listen(app.get('port'), () => {
    console.log('servidor iniciado en el puerto', app.get('port'))
})

export default app;