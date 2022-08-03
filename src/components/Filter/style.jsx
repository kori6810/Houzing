import styled from "styled-components";
import { ReactComponent as Setting} from '../../assets/icons/setting-lines.svg';
import { ReactComponent as Search} from '../../assets/icons/search-icon.svg';

export const Container = styled.div`
  display:flex;
  /* flex-direction: column; */
  /* width: 100%; */
  margin: 10px 131px;
  gap: 20px;
`

const Icon = styled.div``
Icon.Search = styled(Search)`margin-right:8px;`
Icon.Setting = styled(Setting)`margin-right:8px;`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Fragment = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 20px;
`
const Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0D263B;
`

export {Icon, Wrapper, Fragment, Title}