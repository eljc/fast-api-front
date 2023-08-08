import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";

const Header = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar {...props}>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
      </Nav>
      <Nav>
        <Nav.Item>News</Nav.Item>
        <Nav.Item>Users</Nav.Item>
        <Nav.Item>About</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<CogIcon />}>Account</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Header;
//https://rsuitejs.com/components/navbar/
