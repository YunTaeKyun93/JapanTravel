const useMediaList = () => {
  const mediaList = [
    {
      id: "kiminonawa",
      title: "너의이름은",
      contents: [
        {
          animeImageUrl:
            "https://postfiles.pstatic.net/MjAxNzAxMDZfMTE1/MDAxNDgzNjk1MTI3OTg2.SrWYp_qQ8ZJ6VJ0mCdFlbmWqCn4uLciiw914eFDxv_Ug.8liklRFnvRDVQGoqASiZbrjjJrgfWvqlGP1WDlPKjlAg.JPEG.cine_play/movie_image_%282%29.jpg?type=w773",
          loacationImageUrl:
            "https://postfiles.pstatic.net/MjAxNzAxMDZfMjg5/MDAxNDgzNjk1MTI3ODE1.KeGs43JaD7bp_57pgQPTXneUykzViQeYwoENtBoQ1Xgg.svsvO3sPphRP6dP2fkePK7NZ5-My29GL4Iw2Wrsegvgg.JPEG.cine_play/kiminona_33.jpg?type=w773",
          animeTitle: "너의 이름은",
          locationName: "요츠야 스가 신사 계단",
          streamingUrl: "https://laftel.net/",
          story: "스토리 요약",
          coordinates: { lat: 35.68528585208673, lng: 139.72340144542522 }
        },
        {
          animeImageUrl:
            "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000790/img/ko/a0000790_parts_58634739d861b.jpg?20200803114034&q=80",
          loacationImageUrl:
            "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000790/img/ko/a0000790_parts_586347471f8b7.jpg?20200803114034&q=80",
          animeTitle: "너의 이름은",
          locationName: "신주쿠 경찰서 뒤편 교차로",
          streamingUrl: "https://laftel.net/",
          story: "스토리 요약",
          coordinates: { lat: 35.69321007289288, lng: 139.69431512149376 }
        },
        {
          animeImageUrl:
            "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000790/img/ko/a0000790_parts_5863451a8467d.jpg?20200803114034&q=80",
          loacationImageUrl:
            "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000790/img/ko/a0000790_parts_5863452665802.jpg?20200803114034&q=80",
          animeTitle: "너의 이름은",
          locationName: "시나노마치역 육교",
          streamingUrl: "https://laftel.net/",
          story: "스토리 요약",
          coordinates: { lat: 35.67958690648102, lng: 139.71973264422908 }
        }
      ]
    },
    {
      id: "5CentimetersPerSecond",
      title: "초속 5센티미터",
      contents: [
        {
          animeImageUrl:
            "https://www.etoland.co.kr/data/mw.cheditor/160619/2c4b84d0a37ac56af819fbea01eb36e0_EHlbNmWj3.jpg",
          loacationImageUrl:
            "https://www.etoland.co.kr/data/mw.cheditor/160619/2c4b84d0a37ac56af819fbea01eb36e0_rjhN8ajSqgpnBCLT3tvaRdqlAsw9b.JPG",
          animeTitle: "초속 5센티미터",
          locationName: "산구바시 공원",
          streamingUrl: "https://laftel.net/",
          story: "스토리 요약",
          coordinates: { lat: 35.6792263562527, lng: 139.6922062795956 }
        },
        {
          animeImageUrl:
            "https://www.etoland.co.kr/data/mw.cheditor/160619/2c4b84d0a37ac56af819fbea01eb36e0_FHHavJeQRI3dQF6lNdAs3.jpg",
          loacationImageUrl:
            "https://www.etoland.co.kr/data/mw.cheditor/160619/2c4b84d0a37ac56af819fbea01eb36e0_L75fDxLBGj4yPWJonOueJpAS234R.JPG",
          animeTitle: "초속 5센티미터",
          locationName: "산구바시 공원옆",
          streamingUrl: "https://laftel.net/",
          story: "스토리 요약",
          coordinates: { lat:  35.67863287866607, lng :139.6930620821778}
         
        }
      ]
    }
  ];

  return mediaList;
};

export default useMediaList;
// const mediaList= [
//{id:'kminonawa',title:'너의이름은','contents:[{}{}{}]'}
// const media = Media.findById(req.params.id).exec()
// media.contents.findById()
// ]

// 분리 했을 때 장점 : 접근성(?)이 편할듯

// 합쳤을 때 장점 : 관리가 편할 듯함 해당 미디어의 컨텐츠를 추가하기도 용이할 듯?
// 만약 체크박스를 만든다음 자기가 원하는 미디어만 보고 싶거나 그 해당 컨텐츠를 북마크에 저장할때도 편할듯??
