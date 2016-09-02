/*! Last update: Fri Sep 02 2016 18:16:31 GMT+0800 (CST) */
webpackJsonp([6],{366:function(e,t,n){"use strict";function d(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),r=d(o),a=n(254),l=n(338),m=d(l),c=n(335),p={basic:"const SHAPES = ['default', 'primary', 'success', 'warning', 'danger', 'info', 'link'];\n\nfunction renderButtonGroup(shape,index){\n    return (\n        <Dropdown shape={shape}  title={shape} key={index}>\n            <Dropdown.Item eventKey=\"A\" >Default Item</Dropdown.Item>\n            <Dropdown.Item eventKey=\"B\" active>Active Item</Dropdown.Item>\n            <Dropdown.Item eventKey=\"C\" disabled>Disabled Item</Dropdown.Item>\n            <Dropdown.Item divider></Dropdown.Item>\n            <Dropdown.Item href=\"http://www.pagurian.com\">Link Item</Dropdown.Item>\n        </Dropdown>\n    );\n}\nvar instance = (\n    <ButtonToolbar>\n        {SHAPES.map(renderButtonGroup)}\n    </ButtonToolbar>\n);\nReactDOM.render(instance, mountNode);\n",sizing:"const SIZES = ['lg', 'md', 'sm', 'xs'];\n\nfunction renderButtonGroup(size,index){\n    return (\n        <ButtonToolbar key={index} >\n            <Dropdown size={size} title={'Default ' + size }  shape='default'>\n                <Dropdown.Item eventKey=\"A\" >Default Item</Dropdown.Item>\n                <Dropdown.Item eventKey=\"B\" active>Active Item</Dropdown.Item>\n                <Dropdown.Item eventKey=\"C\" disabled>Disabled Item</Dropdown.Item>\n                <Dropdown.Item divider></Dropdown.Item>\n                <Dropdown.Item href=\"http://www.pagurian.com\">Link Item</Dropdown.Item>\n            </Dropdown>\n        </ButtonToolbar>\n    );\n}\nvar instance = (\n    <div>\n        {SIZES.map(renderButtonGroup)}\n    </div>\n);\nReactDOM.render(instance, mountNode);\n",select:'function handleSelect(eventKey){\n    alert(eventKey);\n}\n\nvar instance = (\n    <Dropdown shape=\'default\' activeKey="C" onSelect={handleSelect} select>\n        <Dropdown.Item eventKey="A" >Item A</Dropdown.Item>\n        <Dropdown.Item eventKey="B" >Item B</Dropdown.Item>\n        <Dropdown.Item eventKey="C" >Item C</Dropdown.Item>\n        <Dropdown.Item eventKey="D" >Item D</Dropdown.Item>\n    </Dropdown>\n);\nReactDOM.render(instance, mountNode);\n',noCaret:'var instance = (\n    <Dropdown shape=\'default\' title="Default" noCaret>\n        <Dropdown.Item eventKey="A" >Item A</Dropdown.Item>\n        <Dropdown.Item eventKey="B" >Item B</Dropdown.Item>\n        <Dropdown.Item eventKey="C" >Item C</Dropdown.Item>\n        <Dropdown.Item eventKey="D" >Item D</Dropdown.Item>\n    </Dropdown>\n);\nReactDOM.render(instance, mountNode);\n',dropup:'var instance = (\n    <Dropdown shape=\'default\' title="Default" dropup>\n        <Dropdown.Item eventKey="A" >Item A</Dropdown.Item>\n        <Dropdown.Item eventKey="B" >Item B</Dropdown.Item>\n        <Dropdown.Item eventKey="C" >Item C</Dropdown.Item>\n        <Dropdown.Item eventKey="D" >Item D</Dropdown.Item>\n    </Dropdown>\n);\nReactDOM.render(instance, mountNode);\n',block:'\nvar instance = (\n    <ButtonToolbar>\n       <Dropdown shape=\'default\' title="Default" block>\n            <Dropdown.Item eventKey="A" >Item A</Dropdown.Item>\n            <Dropdown.Item eventKey="B" >Item B</Dropdown.Item>\n            <Dropdown.Item eventKey="C" >Item C</Dropdown.Item>\n            <Dropdown.Item eventKey="D" >Item D</Dropdown.Item>\n        </Dropdown>\n\n        <Dropdown shape=\'default\' title="Default" block bothEnds>\n            <Dropdown.Item eventKey="A" >Item A</Dropdown.Item>\n            <Dropdown.Item eventKey="B" >Item B</Dropdown.Item>\n            <Dropdown.Item eventKey="C" >Item C</Dropdown.Item>\n            <Dropdown.Item eventKey="D" >Item D</Dropdown.Item>\n        </Dropdown>\n\n    </ButtonToolbar>\n);\nReactDOM.render(instance, mountNode);\n'};t["default"]=r["default"].createClass({displayName:"dropdowns",render:function(){return r["default"].createElement(a.Col,{md:9,sm:12},r["default"].createElement("h1",{className:"page-header"},"Dropdowns",r["default"].createElement("span",{className:"page-header-en"},r["default"].createElement("code",null,"Dropdown"),"、",r["default"].createElement("code",null,"Dropdown.Item"))),r["default"].createElement("h3",null,"默认样式"),r["default"].createElement(m["default"],{code:p.basic}),r["default"].createElement("h3",null,"大小"),r["default"].createElement(m["default"],{code:p.sizing}),r["default"].createElement(a.Text,null,"创建块级的Dropdown，给组件设置一个 ",r["default"].createElement("code",null,"block")," 属性"),r["default"].createElement(m["default"],{code:p.block}),r["default"].createElement("h3",null,"模拟 Select"),r["default"].createElement(m["default"],{code:p.select}),r["default"].createElement("h3",null,"没有小图标"),r["default"].createElement(m["default"],{code:p.noCaret}),r["default"].createElement("h3",null,"上拉按钮"),r["default"].createElement(m["default"],{code:p.dropup}),r["default"].createElement("h3",null,"组件属性"),r["default"].createElement(c.Markdown,null,n(367)))}})},367:function(e,t){e.exports="<table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>active</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>block</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>componentClass</td> <td>elementType</td> <td></td> <td></td> </tr> <tr> <td>disabled</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>dropup</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>href</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>target</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>type</td> <td>one of : <code>button</code> <code>reset</code> <code>submit</code></td> <td><code>button</code></td> <td></td> </tr> <tr> <td>size</td> <td>one of : <code>lg</code> <code>md</code> <code>sm</code> <code>xs</code></td> <td></td> <td></td> </tr> <tr> <td>shape</td> <td>one of : <code>default</code> <code>primary</code> <code>success</code> <code>warning</code> <code>danger</code> <code>info</code> <code>link</code></td> <td></td> <td></td> </tr> <tr> <td>onClose</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onOpen</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onToggle</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onSelect</td> <td>function</td> <td></td> <td></td> </tr> </tbody> </table>"}});