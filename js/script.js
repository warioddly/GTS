$(function (){
    $('.new-slider').owlCarousel({
        nav: true,
        loop:true,
        autoplay:true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        items: 2,
        margin: 26,
        navText: ["<img src='images/icons/arrow-left.svg'>","<img src='images/icons/arrow-right.svg'>"]
    });

    $('.goverment-links-slider').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        items: 6,
        dotsEach: true,
    });

    $('.charts').owlCarousel({
      loop:true,
      nav: true,
      dotsData: true,
      items:1,
  })


    $('.karakol').hover(function(event){
      event.preventDefault();
      let title = 'Северо-Восточная таможня';
      let custom = 'Северо-Восточная таможня';
      let transferType = 'Железнодорожная';
      let webCamera = 'Посмотреть';
      let customAdress = 'Кыргызская Республика, Чуйская область, Аламединский район, с. Нижняя Ала-Арча, переулок имени Курманалиева Д.Б.';
      $('.body-header-text').text(title);
      $('.type-value').text(transferType);
      $('.web-value').text(webCamera);
      $('.address-value').text(customAdress);
      $('.custom-value').text(custom);
    })

    $('.bishkek').hover(function(){
      let title = 'МПТП "Манас аэропорт"';
      let custom = 'Таможня "Манас"';
      let transferType = 'Авиа';
      let webCamera = 'Посмотреть';
      let customAdress = 'пункт пропуска «Манас аэропорт», Чуйская обл .Сокулукскийр-н, Международный аэропорт «Манас»';
      $('.body-header-text').text(title);
      $('.type-value').text(transferType);
      $('.web-value').text(webCamera);
      $('.address-value').text(customAdress);
      $('.custom-value').text(custom);
    })

});

const data = {
  labels: [""],
  datasets: [
    {
      categoryPercentage: 1.0,
      barPercentage: 0.8,
      borderRadius: 4,
      label: 'Экспорт',
      data: [80],
      backgroundColor: '#1D3523',
    },
    {
      categoryPercentage: 1.0,
      barPercentage: 0.8,
      borderRadius: 4,
      label: 'Импорт',
      data: [230],
      backgroundColor: '#EDB16E',
    },
    {
      categoryPercentage: 1.0,
      barPercentage: 0.8,
      borderRadius: 4,
      label: 'ВТБ',
      data: [280],
      backgroundColor: '#A06B39',
    }
  ]
  };

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#7B7B7B',
          usePointStyle: true,
          font: {
            size: 16,
            family: 'Source Serif Pro',
            style: 'italic',
            lineHeight: 24,
          }
        },
        minWidth: 20,
        align: 'start',
        position: 'bottom',
      },
      title: {
        color: '#000000',
        display: true,
        text: 'Внешне-торговый оборот по третьим странам, тыс. тонн',
        font: {
          size: 20,
          family: 'Source Serif Pro',
          style: 'normal;',
        }
      },
    }
  },
});


const data1 = {
  labels: [""],
  datasets: [
    {
      categoryPercentage: 1.0,
      barPercentage: 0.8,
      borderRadius: 4,
      label: 'Экспорт',
      data: [50],
      backgroundColor: '#1D3523',
    },
    {
      categoryPercentage: 1.0,
      barPercentage: 0.8,
      borderRadius: 4,
      label: 'Импорт',
      data: [830],
      backgroundColor: '#EDB16E',
    },
    {
      categoryPercentage: 1.0,
      barPercentage: 0.8,
      borderRadius: 4,
      label: 'ВТБ',
      data: [180],
      backgroundColor: '#A06B39',
    }
  ]
  };
const ctx2 = document.getElementById('myChart-2').getContext('2d');
const myChar = new Chart(ctx2, {
type: 'bar',
data: data1,
options: {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#7B7B7B',
        usePointStyle: true,
        font: {
          size: 16,
          family: 'Source Serif Pro',
          style: 'italic',
          lineHeight: 24,
        }
      },
      minWidth: 20,
      align: 'start',
      position: 'bottom',
    },
    title: {
      color: '#000000',
      display: true,
      text: 'Импорт топ 5 стран в сравнении',
      font: {
        size: 20,
        family: 'Source Serif Pro',
        style: 'normal;',
      }
    },
  }
},
});