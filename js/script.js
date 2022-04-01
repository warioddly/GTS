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
})


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