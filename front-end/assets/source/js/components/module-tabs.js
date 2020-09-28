import $ from 'jquery';

export const moduleTabs = () => {
  
  const $moduleTabs = $('.module-tabs');

  $moduleTabs.each(function () {
    const $tabs = $(this).find('.tabs');
    const $ul = $tabs.find('ul');
    const $contentTab = $(this).find('.content-tab');
    
    $tabs.find('button').on('click', function () {
      const $li = $(this).closest('li');

      if (!$li.hasClass('active')) {
        $li.siblings('.active').removeClass('active');
        $li.addClass('active');
        
        const $index = $ul.find('li').index($li);
        const $tabActive = $($contentTab[$index]);

        $contentTab.not($tabActive).slideUp(() => {
          $tabActive.slideDown();
        });
      }
    });
  });

}