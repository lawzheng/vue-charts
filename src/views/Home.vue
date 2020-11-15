<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'

export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  },
  data () {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null
    }
  },
  provide () {
    return {
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapData: this.getMapData
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      [
        {
          jsonKey: 'data',
          dataKey: 'reportData'
        },
        {
          jsonKey: 'wordcloud',
          dataKey: 'wordCloud'
        },
        {
          jsonKey: 'scatter',
          dataKey: 'mapData'
        }
      ].forEach(item => {
        this.readTextFile(`./json/${item.jsonKey}.json`, (res) => {
          this[item.dataKey] = JSON.parse(res)
        })
      })
    },
    readTextFile (file, callback) {
      const rawFile = new XMLHttpRequest()
      rawFile.overrideMimeType('application/json')
      rawFile.open('GET', file, true)
      rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status === 200) {
          callback(rawFile.responseText)
        }
      }
      rawFile.send(null)
    },
    getReportData () {
      return this.reportData
    },
    getWordCloud () {
      return this.wordCloud
    },
    getMapData () {
      return this.mapData
    }
  }
}
</script>

<style>
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
  overflow: auto;
}
</style>
