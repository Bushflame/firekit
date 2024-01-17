<script>

</script>

<Dropdown txt_1={'Image'} txt_2={'Title'} txt_3={'Text'} txt_4={'List'} txt_5={'Contact'}>
    <span slot='slot-1'>
        <Img nam={li.img_4txt_4a} lab={'Image'} />
    </span>
    <span slot='slot-2'>
        <Input  nam={li.title_4txt_4a} lab={'Title'}/>
    </span>
    <span slot='slot-3'>
        <Textarea lab={'Text'} nam={li.para_4txt_4a} rows={10}/>
    </span>
    <span slot='slot-4'>
        <UlDropdown txt_1={1}  txt_2={2}  txt_3={3}  txt_4={4}  txt_5={5}>
            <li slot='slot-1'>
                <Textarea lab={'List item 1'} nam={li.li_4txt_4a}/>
            </li>
            <li slot='slot-2'>
                <Textarea lab={'List item 2'} nam={li.li_4txt_4b}/>
            </li>
            <li slot='slot-3'>
                <Textarea lab={'List item 3'} nam={li.li_4txt_4c}/>
            </li>
            <li slot='slot-4'>
                <Textarea lab={'List item 4'} nam={li.li_4txt_4d}/>
            </li>
            <li slot='slot-5'>
                <Textarea lab={'List item 5'} nam={li.li_4txt_4e}/>
            </li>
        
        </UlDropdown>
    </span>
    <span slot='slot-5'>
        <Input  nam={li.name} lab={'Name'}/>
        <Input  nam={li.email} lab={'Email'}/>
        <Input  nam={li.tel} lab={'Telephone'}/>
        <Input  nam={li.fbook} lab={'FaceBook'}/>
    </span>
    
</Dropdown>

<style lang="stylus">

</style>