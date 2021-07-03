ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [58.134929, 52.685572],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),
        myPieChart = new ymaps.Placemark([
            55.847, 37.6
        ], {
            // Данные для построения диаграммы.
            data: [
                {weight: 8, color: '#0E4779'},
                {weight: 6, color: '#1E98FF'},
                {weight: 4, color: '#82CDFF'}
            ],
            iconCaption: "Диаграмма"
        }, {
            // Зададим произвольный макет метки.
            iconLayout: 'default#pieChart',
            // Радиус диаграммы в пикселях.
            iconPieChartRadius: 30,
            // Радиус центральной части макета.
            iconPieChartCoreRadius: 10,
            // Стиль заливки центральной части.
            iconPieChartCoreFillStyle: '#ffffff',
            // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeStyle: '#ffffff',
            // Ширина линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeWidth: 3,
            // Максимальная ширина подписи метки.
            iconPieChartCaptionMaxWidth: 200
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([58.131498, 52.700636], {
            balloonContent: '<strong>Адрес:</strong> Удмуртская Республика, г. Глазов, ул. Толстого, 50<br><strong>Кадастровый номер:</strong> 18:28:000046:85 <br><strong>Номер разрешения:</strong> 177<br><strong><a href="index50.html">Подробнее</a></strong><br><center><img src="Толстого_50.jpg"logo.png" width="350" height="350"</center/>',
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#FF0000'
        }))
        .add(new ymaps.Placemark([58.139556, 52.673435], {
            balloonContent: '<strong>Адрес:</strong> Удмуртская Республика, г. Глазов, ул. Революции, д. 2<br><strong>Кадастровый номер:</strong> 18:28:000072:252 <br><strong>Номер разрешения:</strong> 164<br><strong><a href="index2.html">Подробнее</a></strong><br><center><img src="1.jpg"logo.png" width="350" height="350"</center/>',
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#0095b6'
        }))
            iconCaptionMaxWidth: '50'
}
