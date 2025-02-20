import React from 'react'
import styled from 'styled-components'
import { ThemeToggle } from 'components/Theme'
import { NavigationLink } from 'components/Link'
import { breakpoints } from 'consts'
import { useRoutes } from 'hooks'
import { Search } from 'components/Search'
import { hiddenAtBreakpointStyles } from 'utils'

const ITEM_SPACING_SM_UP = '2.8rem'

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  line-height: 1.65;
  ${breakpoints.minSm} {
    margin-left: -${ITEM_SPACING_SM_UP};
  }
`

const Item = styled.li`
  ${breakpoints.minSm} {
    padding-left: ${ITEM_SPACING_SM_UP};
  }
  display: flex;
  align-items: center;
  ${hiddenAtBreakpointStyles};
`

const Link = styled(NavigationLink)`
  color: var(--text-medium-contrast);
  display: inline-flex;
  text-align: center;
  padding: 0.6rem 0;
`

export const Actions = () => {
  const { hierarchical: routes } = useRoutes()

  return (
    <Wrapper>
      <Item $hidden="compact">
        <nav aria-label="Quick Navigation Menu">
          <Wrapper>
            {routes.map((route) => (
              <Item key={route.id}>
                <Link route={route}>{route.title}</Link>
              </Item>
            ))}
          </Wrapper>
        </nav>
      </Item>
      <Item>
        <Search />
      </Item>
      <Item $hidden="compact">
        <ThemeToggle />
      </Item>
    </Wrapper>
  )
}
