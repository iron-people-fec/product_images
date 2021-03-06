import React from 'react';
import styled, {keyframes} from 'styled-components';
import MainImage from './MainImage.jsx';

const Thumbnails = (props) => {

  let thumbs = [];
  let product_data = props.product_data;
  let main_image_index = props.main_image_index;

  if (product_data.length >= 4) {
    for (let i = 0; i <= 4; i++) {
      let productImg = product_data[i].image_loc;
      let numOfImage = `+${product_data.length - 5} more`
      if (i === 4) {
        thumbs.push(
          <Thumbnail
            onClick={(e) => props.overlayHandleClick(e, i)}
          >
            <Image
              key={product_data[i].ID}
              src={product_data[i].image_loc}>
            </Image>
            <Overlay>
              {numOfImage}
            </Overlay>
          </Thumbnail>
        )
      } else {
        thumbs.push(
          <Thumbnail href={`#main_image_${i}`}>
            <Image
              key={product_data[i].ID}
              src={product_data[i].image_loc}>
            </Image>
          </Thumbnail>
        )
      }
    }
  } else {
    for (let i = 0; i < product_data[i].length; i++) {
      let productImg = product_data[i].image_loc;
      thumbs.push(
        <Thumbnail href={`#main_image_${i}`}>
          <Image
            key={product_data[i].ID}
            src={product_data[i].image_loc}>
          </Image>
        </Thumbnail>
      )
    }
  }

    return (
      <Container>
        <ThumbnailContainer>
          {thumbs}
        </ThumbnailContainer>
        <MainImage
          main_image_index={main_image_index}
          product_data={props.product_data}
          index={main_image_index}
          overlayHandleClick={props.overlayHandleClick}
        />
      </Container>
    );
}

const ZoomImage = (props) => {

}

export default Thumbnails;

const Container = styled.div`
  width: 695px;
  height: 568px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  background: white;
  margin-left: 12px;
  z-index: 1;
`;

const ThumbnailContainer = styled.aside`
  flex-direction: column;
  height: 568px;
  width: 115px;
`;

const Thumbnail = styled.a`
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  margin: 3px 2px 2px 1px;
`;

const BorderAnimation = keyframes`
  0% {border: dotted 0px};
  10% {border: dotted 1px};
  50% {border: dotted 1px};
  100% {border: solid 1px};
`

const Image = styled.img`
  height: 109px;
  width: 109px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  line-height: 95px;
`;