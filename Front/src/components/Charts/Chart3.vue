<template>
<div>
    <br>
    <br>
    <div>
        <CaseBread></CaseBread>
        <hr/>
        <br>
        <h2>Milk</h2>
        <CasesLine
        :label="labels"
        :chart-data="confirmed" 
        ></CasesLine>
        <br>
        <br>
        <CasesBar
        :label="labels"
        :chart-data="confirmed" 
        ></CasesBar>
        <br>
        <br>
    </div>
</div>
</template>
<script>
import useMilks from '../../services/MilkDataService'
// import CasesBar from '@/components/Visuals/CasesBar'
// import CasesLine from '@/components/Visuals/CasesLine'
// import CaseBread from '@/components/HomePage/Breads/CaseBread'
export default {
     data : ()=> {
        return {
            labels : [],
            volume : [],
        }

    },
    // components : {
    //     CasesLine,
    //     CasesBar,
    //     CaseBread
    // },
    async created() {
  const { getMilks } = useMilks;
  var c=0
  for(var i=0;i<1000;i++){
    if(data[i].milking_time=="AM"){
            if (data[i].cow_id in this.labels){
              continue
            }
            else{
              this.labels.push(data[i].cow_id)
              this.volume.push(data[i].volume)
            }
          }
  }
console.log(this.cow_id)
}   
}
</script>