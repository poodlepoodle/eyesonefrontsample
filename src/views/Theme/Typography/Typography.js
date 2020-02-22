import React, { Component } from 'react';

class Typography extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-body special_card">
            <p className="special_card_text"><strong className="special_card_text_number">'파리바게뜨 갤러리아 팰리스점'</strong> 에 대한 신규상품 추천입니다.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="custom-card-header">
                신규 상품 추천
              </div>
              <div className="card-body special_card">
                <row>
                  <img src={'../../assets/img/recommend_1.png'} className="img_avatar same_box"/>  
                  <img src={'../../assets/img/recommend_2.png'} className="img_avatar same_box"/>  
                  <img src={'../../assets/img/recommend_3.png'} className="img_avatar same_box"/>  
                </row>
              </div>
            </div>
            <div className="card">
              <div className="custom-card-header">
                키워드 추출
              </div>
              <div className="mb-5 empty-custom-box">

              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card">
              <div className="custom-card-header">
                트렌드 리포트 결과
              </div>
              <div className="card-body long_box">
                <img src={'../../assets/img/report_graph.png'} className="tight_box"/>   
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Typography;
