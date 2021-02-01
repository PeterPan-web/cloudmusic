<template>
  <div class="header">
    <div class="imgwrap">
      <img :src="dataplaylist.coverImgUrl" alt="" />
    </div>
    <div class="content">
      <div class="titlewrap">
        <p>{{ dataplaylist.name }}</p>
      </div>
      <div class="creatorwrap">
        <img :src="dataplaylist.creator.avatarUrl" alt="" />
        <p class="creator">{{ dataplaylist.creator.nickname }}</p>
        <p>{{ dataplaylist.createTime | formatDate }}创建</p>
      </div>
      <div class="actionwrap">
        <nbutton>
          播放全部
        </nbutton>
      </div>
      <div class="descwrap">
        <p>
          标签：<span>{{ tagsText }}</span>
        </p>
      </div>
      <div class="dsc">
        <p>{{ dataplaylist.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "utils/data";
import nbutton from "components/common/nbutton.vue";
export default {
  components: { nbutton },
  data() {
    return {
      dataplaylist: {
        'name': "治愈 °一份来自四季的温暖旋律",
        'coverImgUrl':
          "http://p2.music.126.net/1mMfnzvEG99ptwk4gG-LDQ==/109951165399112816.jpg",
        'creator': {
          'nickname': "樱桃味音乐",
          'avatarUrl': "http://p1.music.126.net/oqJmvA9ot4vWbCrkX7rCrw==/109951164873006151.jpg"
        },
        'tags': ["欧美", "清新", "民谣"],
        'description':
          "①春°温暖\n\n“希望你远行，看广阔的世界，\n希望你优秀，有更好的前程，\n也希望你留在这里，让我继续爱你。”\n\n②夏°清新\n\n③秋°美好\n“秋天意味着什么呢\n是明亮的灿黄色  融入果树的赤红\n萧瑟和寂寥成为暗调的叠影\n柔光洒落在澄澈的湖水上 你把自己藏匿在舒适的卫衣里 \n耳机里放着一首Autumn\n风扫过树下落叶 秋色把小路拉得绵延\n大雁飞过树林上空 河岸的田园满载丰收的喜悦\n你说 秋天是不息的余温连绵”\n——春山域禾\n\n④冬°温柔",
        'createTime': "1602596860326",
      },
    };
  },
  props: {
    playlist: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted () {
    this.dataplaylist=this.playlist
  },
  computed: {
    tagsText() {
      return this.dataplaylist.tags.join("/");
    },
  },
  filters: {
    /*
    时间格式自定义 只需把字符串里面的改成自己所需的格式
   */
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy.MM.dd");
    },
    formatDate2(time) {
      var date = new Date(time);
      return formatDate(date, "hh:mm:ss");
    },
    formatDate3(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy年MM月dd日 hh:mm:ss");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  font-size: 14px;

  .imgwrap {
    width: 200px;
    height: 200px;
    margin-right: 24px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    .titlewrap {
      margin-bottom: 12px;
    }

    .creatorwrap {
      display: flex;
      line-height: 50px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 15px;
      }
      .creator {
        margin-right: 15px;
      }
    }

    .actionwrap {
      margin-top: 15px;
    }

    .descwrap {
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .dsc {
    }
  }
}
</style>
