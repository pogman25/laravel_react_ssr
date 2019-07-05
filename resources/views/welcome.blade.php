<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
 
    </head>
    <body>
    <h1>React application =></h1>
    <hr/>
        <div id="app">
            {!! ssr('js/main-server.js') 
            ->context('data', $data)
            ->render() !!}
        </div>

        <script>
        window.store = {!! json_encode($data) !!};
        
        </script>

        <script type="text/javascript" src="js/App.js"></script>
    </body>
</html>
