<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="StateMangement.aspx.cs" Inherits="Hackathon.StateMangement" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>State Management</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <h2>My State Management</h2>
            <p>
                Key:
                <asp:TextBox runat="server" ID="ke" />
            </p>
            <p>
                Value:
                <asp:TextBox runat="server" ID="val" />
            </p>
            <p>
                <asp:Button runat="server" ID="session" OnClick="session_Click" Text="session" />
                <asp:Button runat="server" ID="application" OnClick="application_Click" Text="Application" />
                <asp:Button runat="server" ID="PageViewState" OnClick="PageViewState_Click" Text="PageViewState" />
            </p>
            <asp:Label Text="" ID="lblText" runat="server" />
            <table>
                <asp:Repeater runat="server" ID="txtrepeater">
                    <HeaderTemplate>
                        <tr>
                            <td>Key</td>
                            <td>Value</td>
                        </tr>
                    </HeaderTemplate>
                    <ItemTemplate>
                        <tr>
                            <td><%#Eval("Key") %>
                            </td>
                            <td><%#Eval("Value") %>
                            </td>
                        </tr>
                    </ItemTemplate>
                </asp:Repeater>
            </table>
        </div>
    </form>
</body>
</html>