let btnscrap = document.getElementById('scrap-profile')

btnscrap.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tab !== null) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: scrapingProfile,
    });
  }
})

const scrapingProfile = () => {
  const wait = function (milliseconds) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, milliseconds);
    });
  };



  const elementNameProfile = document.querySelector("div.ph5.pb5 > div.display-flex.mt2 ul li")
  const elementNameTitle = document.querySelector("div.ph5.pb5 > div.display-flex.mt2 h2")
  const name = elementNameProfile ? elementNameProfile.innerText : '';
  const title = elementNameTitle ? elementNameTitle.innerText : '';
  wait(2000)
  const elementMoreResume = document.getElementById('line-clamp-show-more-button')
  if (elementMoreResume) elementMoreResume.click();
  const elementResume = document.querySelector('section.pv-about-section > p')
  const resume = elementResume ? elementNameTitle.innerText : '';
  const getexperience= document.querySelector('#ember1145 > div.pv-entity__summary-info.pv-entity__summary-info--background-section > h3')
 
  const primera_experiencia_puesto=document.querySelector('#ember1145 > div.pv-entity__summary-info.pv-entity__summary-info--background-section > h3')
  const primera_experiencia_fecha=document.querySelector('#ember1145 > div.pv-entity__summary-info.pv-entity__summary-info--background-section > div > h4.pv-entity__date-range.t-14.t-black--light.t-normal > span:nth-child(2)')
  const primera_experiencia_empresa=document.querySelector('#ember1145 > div.pv-entity__summary-info.pv-entity__summary-info--background-section > p.pv-entity__secondary-title.t-14.t-black.t-normal')
  
  trabajo1=[primera_experiencia_puesto,primera_experiencia_empresa,primera_experiencia_fecha]
  for(i=0;i<trabajo1.length;i++){
    console.log(trabajo1[i].innerText)
  }

  const segunda_experiencia_puesto=document.querySelector('#ember1152 > div.pv-entity__summary-info.pv-entity__summary-info--background-section.mb2 > h3')
  const segunda_experiencia_fecha=document.querySelector('#ember1152 > div.pv-entity__summary-info.pv-entity__summary-info--background-section.mb2 > div > h4.pv-entity__date-range.t-14.t-black--light.t-normal > span:nth-child(2)')
  const segunda_experiencia_empresa=document.querySelector('#ember1152 > div.pv-entity__summary-info.pv-entity__summary-info--background-section.mb2 > p.pv-entity__secondary-title.t-14.t-black.t-normal')
  trabajo2=[segunda_experiencia_puesto,segunda_experiencia_empresa,segunda_experiencia_fecha]
  
  for(i=0;i<trabajo2.length;i++){
    console.log(trabajo2[i].innerText)
  }

  console.log({ name, title, resume})

}