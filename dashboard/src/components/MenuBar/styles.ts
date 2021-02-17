import styled from 'styled-components';
import { BsCursor, BsGrid } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdChatBubbleOutline } from 'react-icons/md';

export const Container = styled.div`
  width: 96px;
  height: 821px;
  background: #f25d27;
  padding: 24px 0;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .box1 {
    height: 50px;
    display: flex;
    flex-direction: column;
  }
  .box2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
    .active {
      color: #fff;
      .unactive {
        color: #ffa585;
      }
    }
  }
  .box3 {
    cursor: pointer;
  }
`;

export const BsCursorTop = styled(BsCursor)`
  color: #fff;
  transform: rotate(-40deg);
  cursor: pointer;
`;

export const BsCursorBottom = styled(BsCursor)`
  color: #fff;
  transform: rotate(140deg);
  cursor: pointer;
`;

export const IconMenu = styled(HiOutlineLocationMarker)`
  color: #fff;
  cursor: pointer;
`;
export const IconMenu2 = styled(BsGrid)`
  color: #fff;
  cursor: pointer;
`;
export const IconMenu3 = styled(MdChatBubbleOutline)`
  color: #fff;
  cursor: pointer;
`;
