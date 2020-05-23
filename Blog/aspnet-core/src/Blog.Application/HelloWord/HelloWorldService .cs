using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.HelloWord
{
    public class HelloWorldService : BlogAppService, IHelloWorldService
    {
        public string HelloWorld()
        {
            return "Hello World";
        }
    }
}
