
export class ARRAY_MENU {
  public static get OPCIONES(): any {
    return [
      {label: 'DATOS GENERALES', div: "divDatosGenerales" ,value: true, command: (event: any) => {
        let itemsmenu = document.getElementsByClassName("ui-menuitem-text");
        let itemmenu = null;

 
        for(var i = 0; i < itemsmenu.length; i++){

          if(itemsmenu[i].firstChild.textContent == " DATOS GENERALES "){
            itemmenu = itemsmenu[i];
           }
        }

        let itemsmenu2 = document.getElementsByClassName("pi pi-times") as HTMLCollectionOf<HTMLElement>;
            if(document.getElementById("divDatosGenerales").style.border.length>0){
              document.getElementById("divDatosGenerales").style.border = "";
              itemmenu.parentNode.parentNode.parentNode.style.border = "1px solid #c8c8c8";
              itemmenu.parentNode.parentNode.parentNode.style.background = "#f4f4f4";
              for(var i = 0; i < itemsmenu2.length; i++){
                itemsmenu2[i].style.color = "#333333";
              }
              itemmenu.style.color = "#333333";


            }else{
              itemmenu.parentNode.parentNode.parentNode.style.border = "1px solid #007ad9";
              itemmenu.parentNode.parentNode.parentNode.style.background = "#007ad9";
              document.getElementById("divDatosGenerales").style.border = "thick solid #0000FF";
              for(var i = 0; i < itemsmenu2.length; i++){
                itemsmenu2[i].style.color = "#000000";
              }
              itemmenu.style.color = "#FFFFFF";

            }

      } },
      {label: 'CONCESIÓN', div: "divConcesion",value: true, command: (event: any) => {

        let itemsmenu = document.getElementsByClassName("ui-menuitem-text");
        let itemmenu = null;

        for(var i = 0; i < itemsmenu.length; i++){

          if(itemsmenu[i].firstChild.textContent == " CONCESIÓN "){
            itemmenu = itemsmenu[i];
           }
        }

        let itemsmenu2 = document.getElementsByClassName("pi pi-times") as HTMLCollectionOf<HTMLElement>;
            if(document.getElementById("divConcesion").style.border.length>0){
              document.getElementById("divConcesion").style.border = "";
              itemmenu.parentNode.parentNode.parentNode.style.border = "1px solid #c8c8c8";
              itemmenu.parentNode.parentNode.parentNode.style.background = "#f4f4f4";
              for(var i = 0; i < itemsmenu2.length; i++){
                itemsmenu2[i].style.color = "#333333";
              }
              itemmenu.style.color = "#333333";

              itemmenu.parentNode.childNodes[3].color= "#333333";

            }else{
              itemmenu.parentNode.parentNode.parentNode.style.border = "1px solid #007ad9";
              itemmenu.parentNode.parentNode.parentNode.style.background = "#007ad9";
              document.getElementById("divConcesion").style.border = "thick solid #0000FF";
              for(var i = 0; i < itemsmenu2.length; i++){
                itemsmenu2[i].style.color = "#000000";
              }
              itemmenu.parentNode.childNodes[3].color= "#000000";
              itemmenu.style.color = "#FFFFFF";

            }
      }},
      {label: 'UBICACIÓN', div: "divUbicacion", value: true, command: (event: any) => {
        let itemsmenu = document.getElementsByClassName("ui-menuitem-text");
        let itemmenu = null;

        for(var i = 0; i < itemsmenu.length; i++){

          if(itemsmenu[i].firstChild.textContent == " UBICACIÓN "){
            itemmenu = itemsmenu[i];
           }
        }

        let itemsmenu2 = document.getElementsByClassName("pi pi-times") as HTMLCollectionOf<HTMLElement>;
            if(document.getElementById("divUbicacion").style.border.length>0){
              document.getElementById("divUbicacion").style.border = "";
              itemmenu.parentNode.parentNode.parentNode.style.border = "1px solid #c8c8c8";
              itemmenu.parentNode.parentNode.parentNode.style.background = "#f4f4f4";
              for(var i = 0; i < itemsmenu2.length; i++){
                itemsmenu2[i].style.color = "#333333";
              }
              itemmenu.style.color = "#333333";

              itemmenu.parentNode.childNodes[3].color= "#333333";

            }else{
              itemmenu.parentNode.parentNode.parentNode.style.border = "1px solid #007ad9";
              itemmenu.parentNode.parentNode.parentNode.style.background = "#007ad9";
              document.getElementById("divUbicacion").style.border = "thick solid #0000FF";
              for(var i = 0; i < itemsmenu2.length; i++){
                itemsmenu2[i].style.color = "#000000";
              }
              itemmenu.parentNode.childNodes[3].color= "#000000";
              itemmenu.style.color = "#FFFFFF";

            }
      }},
    {label: 'TRÁMITES',div: "divTramites", value: true, command: (event: any) => {
      let itemsmenu = document.getElementsByClassName("ui-menuitem-text");
      let itemmenu = null;

      for(var i = 0; i < itemsmenu.length; i++){

        if(itemsmenu[i].firstChild.textContent == " TRÁMITES "){
          itemmenu = itemsmenu[i];
         }
      }

      let itemsmenu2 = document.getElementsByClassName("pi pi-times") as HTMLCollectionOf<HTMLElement>;
          if(document.getElementById("divTramites").style.border.length>0){
            document.getElementById("divTramites").style.border = "";
            itemmenu.parentNode.parentNode.parentNode.style.border = "1px solid #c8c8c8";
            itemmenu.parentNode.parentNode.parentNode.style.background = "#f4f4f4";
            for(var i = 0; i < itemsmenu2.length; i++){
              itemsmenu2[i].style.color = "#333333";
            }
            itemmenu.style.color = "#333333";

            itemmenu.parentNode.childNodes[3].color= "#333333";

          }else{
            itemmenu.parentNode.parentNode.parentNode.style.border = "1px solid #007ad9";
            itemmenu.parentNode.parentNode.parentNode.style.background = "#007ad9";
            document.getElementById("divTramites").style.border = "thick solid #0000FF";
            for(var i = 0; i < itemsmenu2.length; i++){
              itemsmenu2[i].style.color = "#000000";
            }
            itemmenu.parentNode.childNodes[3].color= "#000000";
            itemmenu.style.color = "#FFFFFF";

          }
    }} ];
  };



}
