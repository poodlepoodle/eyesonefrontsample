import React, { Component } from 'react';

class Colors extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card border-0 card-shadow-styles">
          <div className="card-body special_card">
            <p className="special_card_text">이번 달 사장님의 <strong className="special_card_text_number">3월</strong> 예상 매출액은 <strong className="special_card_text_number">5,489,129</strong> 원 입니다.</p>
          </div>
        </div>

        <div className="card border-0 card-shadow-styles">
          <div className="custom-card-header">
            희망 예측 기간 조회
          </div>
          <div className="card-body">
              
          <tbody>
            <tr>
              <td>
                <div class="dropdown custom-dropdown-style mb-3">
                  <a class="btn btn-secondary dropdown-toggle" role="button" id="sample_dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    2020    
                  </a>
                  <div class="dropdown-menu" aria-labelledby="sample_dropdownMenuLink">
                    <a class="dropdown-item" href="#">2020</a>
                    <a class="dropdown-item" href="#">2019</a>
                    <a class="dropdown-item" href="#">2018</a>
                  </div>
                </div>
              </td>
              <td>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="2020-01-01" />
                </div>
              </td>
              <div className="wavearrow mt-2">~</div>
              <td>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="2020-02-02" />
                </div>
              </td>
              <td>
                <button type="button" class="btn btn-primary mb-3 custom-button-marginstyle">예측하기</button>
              </td>
              <td><div></div></td>
              <td><div></div></td>
            </tr>
          </tbody>
          </div>
        </div>

        <div class="row">
          <div class="col-4">
            <div className="card border-0 card-shadow-styles">
              <div className="custom-card-header">
                지역설명
              </div>
              <div className="card-body special_card">
                <img src={'../../assets/img/map.png'} className="img-avatar"/>   
              </div>
              <div>
                <div className="custom-card-header mb-3">
                  상위 6개 지역
                </div>
                <div class="list-group">
                  <a class="list-group-item list-group-item-action custom_listitem_contentfont">1. 서울특별시 송파구 잠실동</a>
                  <a class="list-group-item list-group-item-action custom_listitem_contentfont">2. 서울특별시 송파구 석촌동</a>
                  <a class="list-group-item list-group-item-action custom_listitem_contentfont">3. 서울특별시 송파구 가락1동</a>
                  <a class="list-group-item list-group-item-action custom_listitem_contentfont">4. 서울특별시 송파구 문정동</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-8">
            <div className="card border-0 card-shadow-styles">
              <tr>
                <td>
                  <div className="custom-card-header">
                    상품 판매 예측 결과
                  </div>
                </td>
                <td>
                  <img src={'../../assets/img/excel_download.png'} className="img-avatar img_custom_box"/>
                </td>
              </tr>
              <div className="card-body special_card">
                <div className="dashboard_mini">
                  <h1 className="dashboard_mini_text">대시보드 화면</h1>
                </div>
              </div>
              <div className="custom-card-header mb-3">
                상위 4개 상품목록
              </div>

              <div className="row">
                <td className="col-2"></td>
                <td className="col-2">
                  <div className="img_setting_styles">
                    <img src={'../../assets/img/mer_1.png'} className="img-avatar"/>
                  </div>
                </td>
                <td className="col-2">
                  <div className="img_setting_styles">
                    <img src={'../../assets/img/mer_2.png'} className="img-avatar"/>
                  </div>
                </td>
                <td className="col-2">
                  <div className="img_setting_styles">
                    <img src={'../../assets/img/mer_3.png'} className="img-avatar"/>
                  </div>
                </td>
                <td className="col-2">
                  <div className="img_setting_styles">
                    <img src={'../../assets/img/mer_4.png'} className="img-avatar"/>
                  </div>
                </td>
                <td className="col-2"></td>
              </div>


            </div>
          </div>
        </div>



      </div>
    );
  }
}

export default Colors;
