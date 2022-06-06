import {
  HeaderContainer,
  Header as CarbonHeader,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenu,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';

export function Header() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <CarbonHeader aria-label="IBM Platform Name">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="#" prefix="IBM">
            [Platform]
          </HeaderName>
          <HeaderNavigation aria-label="IBM [Platform]">
            <HeaderMenuItem isCurrentPage href="#">
              Link 1
            </HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
              <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}>
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                  <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                </HeaderMenu>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
        </CarbonHeader>
      )}
    />
  );
}
