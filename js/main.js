$(document).ready(function() {
  $.backstretch(
    [
      'https://raw.githubusercontent.com/lucianorodrigo/portifolio/master/img/banner3.jpg',
      'https://raw.githubusercontent.com/lucianorodrigo/portifolio/master/img/coding_2.jpg',
    ],
    {
      duration: 10000,
      fade: 'slow',
    }
  );
  var data = [
    {
      id: 0,
      title: 'Tribute Page',
      description: 'Uma homenagem à Chico Mendes.',
      demoUrl: 'https://codepen.io/lucianorodrigo/full/YLXdQW/',
      previewUrl:
        'https://raw.githubusercontent.com/lucianorodrigo/portifolio/master/img/tribute-chico.png',
      category: 'frontend',
    },
    {
      id: 1,
      title: 'Prometo Ser Fiel',
      description:
        'Um site institucional sobre evendo de casamento em estadio de futebol',
      demoUrl: 'http://www.prometoserfiel.com.br/',
      previewUrl:
        'https://raw.githubusercontent.com/lucianorodrigo/portifolio/master/img/prometo_ser_fiel.PNG',
      category: 'wordpress',
    },
    {
      id: 2,
      title: 'Mundial Logistics',
      description:
        'Um site institucional de uma empresa de logistica',
      demoUrl: 'http://mundiallogisticsgroup.com.br/',
      previewUrl:
        'https://raw.githubusercontent.com/lucianorodrigo/portifolio/master/img/mundial_logistics.PNG',
      category: 'wordpress',
    },
    {
      id: 3,
      title: 'Chat Admin',
      description:
        'Sistema online de streaming com chat administrado com a finalidade de ser uma plataforma de ensino',
      demoUrl: 'https://ancient-gorge-76279.herokuapp.com/',
      previewUrl:
        'https://raw.githubusercontent.com/lucianorodrigo/portifolio/master/img/chat_admin.PNG',
      category: 'backend',
    },
    {
      id: 4,
      title: 'Acampamentos YelpCamp',
      description:
        'Prototipo de sistema de aluguel de acampamentos em nodejs',
      demoUrl: 'https://peaceful-forest-36422.herokuapp.com',
      previewUrl:
        'https://raw.githubusercontent.com/lucianorodrigo/portifolio/175c9c2c518799f8495f5e399b5e050da13b3682/img/yelp_camp.PNG',
      category: 'backend',
    },
    {
      id: 5,
      title: 'Trillo',
      description:
        'Prototipo front-end de plataforma de aluguel para viagens',
      demoUrl: 'https://lucianorodrigo.github.io/trillo/',
      previewUrl:
        'https://raw.githubusercontent.com/lucianorodrigo/portifolio/master/img/trillo.PNG',
      category: 'frontend',
    },
    {
      id: 6,
      title: 'Segredos do bitcoin',
      description:
        'Site de venda de curso para criptomoedas como bitcoin e afins',
      demoUrl: 'http://lucianoros.tk/testes/',
      previewUrl:
        'https://raw.githubusercontent.com/lucianorodrigo/portifolio/master/img/segredos-bitcoin.PNG',
      category: 'frontend',
    },
    {
      id: 7,
      title: 'Scorm lg mc',
      description:
        'Conteúdo de plataforma de ensino no padrão scorm para treinamentos de dispositivo da lg',
      demoUrl: 'https://www.youtube.com/watch?v=s84stBSErl4',
      previewUrl:
        'https://raw.githubusercontent.com/lucianorodrigo/portifolio/master/img/scorm-mc.PNG',
      category: 'scorm',
    },
    {
      id: 8,
      title: 'Scrom lg uhd',
      description:
        'Conteúdo de plataforma de ensino no padrão scorm para treinamentos de dispositivo da lg',
      demoUrl: 'https://youtu.be/0kFlW4NHOEw',
      previewUrl:
        'https://raw.githubusercontent.com/lucianorodrigo/portifolio/master/img/scorm-uhd.PNG',
      category: 'scorm',
    },
  ];

  var frontend = data.filter(function(item) {
    return item.category === 'frontend';
  });

  var wordpress = data.filter(function(item) {
    return item.category === 'wordpress';
  });

  var scorm = data.filter(function(item) {
    return item.category === 'scorm';
  });

  var backend = data.filter(function(item) {
    return item.category === 'backend';
  });

  var react = data.filter(function(item) {
    return item.category === 'react';
  });

  function removeActiveClass() {
    $('.center')
      .find('a')
      .each(function(i, el) {
        if ($(el).hasClass('active')) {
          $(el).removeClass('active');
        }
      });
  }
  function removeOpenClass() {
    $('.container').each(function(i, el) {
      if ($(el).hasClass('open')) {
        $(el).removeClass('open');
      }
    });
  }
  $('.js-close').on('click', function(e) {
    e.preventDefault();
    removeActiveClass();
    $('.center').animate(
      {
        opacity: '0',
      },
      50
    );
    if ($(window).width() <= 900) $('.container.home header .right').show(100);
    removeOpenClass();
    $('.close-arrow').hide();
  });
  $('.js-open-about').on('click', function(e) {
    e.preventDefault();
    removeOpenClass();
    $('.about').addClass('open');
    $('.close-arrow').show(600);
    if ($(window).width() <= 900) $('.container.home header .right').hide(100);
    $('.center').animate(
      {
        opacity: '1',
      },
      500
    );
    removeActiveClass();
    $('.center')
      .find('.js-open-about')
      .addClass('active');
  });

  $('.js-open-works').on('click', function(e) {
    e.preventDefault();
    removeOpenClass();
    $('.works').addClass('open');
    $('.close-arrow').show(600);
    if ($(window).width() <= 900) $('.container.home header .right').hide(100);
    $('.center').animate(
      {
        opacity: '1',
      },
      500
    );
    removeActiveClass();
    $('.center')
      .find('.js-open-works')
      .addClass('active');
  });

  $('.js-open-contact').on('click', function(e) {
    e.preventDefault();
    removeOpenClass();
    $('.contact').addClass('open');
    $('.close-arrow').show(600);
    if ($(window).width() <= 900) $('.container.home header .right').hide(100);
    $('.center').animate(
      {
        opacity: '1',
      },
      500
    );
    removeActiveClass();
    $('.center')
      .find('.js-open-contact')
      .addClass('active');
  });

  // $(".title h1").typed({
  //       strings: ["Hello", "Welcome", "I Am VinayPuppal", "A Self Taught","Web Developer"],
  //       typeSpeed: 100,
  //       loop: true
  //     });

  function generateCard(data) {
    var title = data.title;
    var desc = data.description;
    var imgUrl = data.previewUrl;
    var demoUrl = data.demoUrl;
    return (
      '<li class="card animated zoomIn"><div class="card-media"><img src=' +
      imgUrl +
      ' alt="#" /></div><div class="card-content"><h4>' +
      title +
      '</h4><p>' +
      desc +
      '</p></div><div class="card-actions"><a target="_blank" href=' +
      demoUrl +
      ' class="view-demo">Demo</a></div></li>'
    );
  }
  function renderToDom(data) {
    data.forEach(function(item) {
      var card = generateCard(item);
      //render card to dom
      //console.log(card);
      $('.js-list').append(card);
    });
  }
  //for intial rendering
  renderToDom(frontend);

  function clearDom() {
    $('.js-list').empty();
  }
  $('input[type=radio]').on('change', function(e) {
    switch (e.target.value) {
      case 'frontend':
        clearDom();
        renderToDom(frontend);
        break;
      case 'wordpress':
        clearDom();
        renderToDom(wordpress);
        break;
      case 'scorm':
        clearDom();
        renderToDom(scorm);
        break;
      case 'backend':
        clearDom();
        renderToDom(backend);
        break;
      case 'react':
        clearDom();
        renderToDom(react);
        break;
      case 'meteor':
        clearDom();
        renderToDom(meteor);
        break;
    }
  });

  if (document.createElement('p').style.flex === undefined) {
    $('.supported').hide();
    $('.not-supported').show();
    alert('Sorry your browser is not supported. Please Use Latest Browsers Like Chrome');
  }

  if (~navigator.userAgent.indexOf('UCBrowser') || ~navigator.userAgent.indexOf('Opera Mini')) {
    $('.supported').hide();
    $('.not-supported').show();
    alert('Sorry your browser is not supported. Please Use Latest Browsers Like Chrome');
  }
});
