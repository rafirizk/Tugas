const render = ()=>{
    event.preventDefault()
    var jen = document.getElementById('jenis').value
    var uk = document.getElementById('ukuran').value
    if (jen == 1){
        let z = ''
        for (let i = 0; i < uk; i++) {
          for (let j = 0; j < uk; j++ ){
            z += '*';
          }
          z += '<br>';
          
        }
        document.getElementById('rend').innerHTML = z
      }else if (jen == 2){
          let z = ''
          for (let i = 0; i <= uk; i++) {
              for (let j = 0; j < i; j++ ){
              z += '*';
          }
          z += '<br>'
          }
          document.getElementById('rend').innerHTML = z      
        }else if (jen == 3){
          var output=''
          for(let i=0;i<uk;i++){
              for(let j=i;j<uk;j++){
                  output+=' '
              }
              for(let bintang=0;bintang<=i;bintang++){
                  output+='*'
              }
              output+='<br>'
          }
          document.getElementById('rend').innerHTML = output
    }
}