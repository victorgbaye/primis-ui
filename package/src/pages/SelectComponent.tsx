import Select from '../components/Select'

export const SelectComponent = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
  return (
    <div>
        <Select
        placeholder='select an option'
        // defaultValue='Link'
        options={[
            { value: 'Multi-select', label: 'Multi-select' },
            { value: 'Single choice select', label: 'Single choice select' },
            { value: 'Small text area', label: 'Small text area' },
            { value: 'Large text area', label: 'Large text area' },
            { value: 'Contact info', label: 'Contact info' },
            { value: 'Calendar', label: 'Calendar' },
            { value: 'Link', label: 'Link' },
            { value: 'Rating', label: 'Rating' },
            { value: 'File Upload', label: 'File Upload' },
            // Add more options as needed
        ]}
        onChange={handleChange}
        />
    </div>
  )
}
