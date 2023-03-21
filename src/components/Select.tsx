import styled from '@emotion/styled'
import { useCallback } from 'react'
import ReactSelect from 'react-select'

import { Colors } from '@/utils/colors'

export type SelectOption = {
  value: string
  label: string
}

type SelectProps = {
  instanceId?: string
  value: string
  options: SelectOption[]
  onChange: (selected: SelectOption) => void
}

const defaultInstanceid = 'react-select'

export const Select: React.FC<SelectProps> = ({
  instanceId = defaultInstanceid,
  value,
  options,
  onChange: handleChange,
}) => {
  const onChange = useCallback(
    (selected: unknown) => {
      if (!selected) {
        return
      }
      handleChange(selected as SelectOption)
    },
    [handleChange],
  )

  return (
    <StyledSelect
      id={instanceId}
      instanceId={instanceId}
      classNamePrefix="react-select"
      options={options}
      defaultValue={options.find((v) => v.value === value)}
      onChange={onChange}
      isSearchable={false}
    />
  )
}

const StyledSelect = styled(ReactSelect)`
  width: 136px;
  user-select: none;
  color: ${Colors.text};

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__control {
    border: 0;
    border-radius: 12px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &--is-focused {
      border: 0 !important;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08) !important;
    }
  }

  .react-select__single-value,
  .react-select__option {
    font-size: 14px;
    line-height: 1.45;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
  }

  .react-select__single-value {
    color: #132d49;
  }

  .react-select__option {
    cursor: pointer;

    &:active {
      background-color: ${Colors.opacity40};
    }

    &--is-selected {
      background-color: ${Colors.primary} !important;
    }

    &--is-focused {
      background-color: ${Colors.opacity20};

      &.react-select__option--is-selected {
        color: rgba(255, 255, 255, 0.85);
      }
    }
  }

  .react-select__menu {
    border: 0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }

  .react-select__menu-list {
    padding: 0;
  }

  .react-select__value-container {
    padding-right: 0;
  }
  .react-select__dropdown-indicator {
    padding-left: 0;
  }
`
